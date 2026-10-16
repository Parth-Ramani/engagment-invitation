import { EVENT_DETAILS } from "./event";

/**
 * Generates an .ics file content string adhering to RFC 5545
 */
export function generateIcsContent(): string {
  // Start: 05 Nov 2026, 10:30 AM IST (UTC: 05:00)
  // End: 05 Nov 2026, 11:30 AM IST (UTC: 06:00) - 1 hour default duration
  const dtStart = "20261105T050000Z";
  const dtEnd = "20261105T060000Z";
  const dtStamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const uid = `parth-ankita-engagement-${Date.now()}@invitation`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Parth & Ankita//Engagement Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${EVENT_DETAILS.couple.combined} - ${EVENT_DETAILS.event.title}`,
    `DESCRIPTION:You are cordially invited to celebrate the Engagement Ceremony of ${EVENT_DETAILS.couple.combined}.\\nVenue: ${EVENT_DETAILS.venue.name} ${EVENT_DETAILS.venue.subName}, ${EVENT_DETAILS.venue.fullAddress}\\nHost: ${EVENT_DETAILS.family.inviter} (${EVENT_DETAILS.family.familyGroup})\\nContact: ${EVENT_DETAILS.contact.phoneDisplay}`,
    `LOCATION:${EVENT_DETAILS.venue.name}, ${EVENT_DETAILS.venue.fullAddress}`,
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    "BEGIN:VALARM",
    "TRIGGER:-PT24H",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: ${EVENT_DETAILS.couple.combined} Engagement Ceremony Tomorrow`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/**
 * Initiates direct download of the .ics file in browser
 */
export function downloadIcsFile(): void {
  const icsData = generateIcsContent();
  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Parth-and-Ankita-Engagement.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Builds Google Calendar web add link
 */
export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent(
    `${EVENT_DETAILS.couple.combined} - ${EVENT_DETAILS.event.title}`
  );
  // UTC 20261105T050000Z / 20261105T060000Z
  const dates = "20261105T050000Z/20261105T060000Z";
  const details = encodeURIComponent(
    `You are cordially invited to celebrate the Engagement Ceremony of ${EVENT_DETAILS.couple.combined}.\n\nVenue: ${EVENT_DETAILS.venue.name} ${EVENT_DETAILS.venue.subName}\nAddress: ${EVENT_DETAILS.venue.fullAddress}\nHost: ${EVENT_DETAILS.family.inviter} (${EVENT_DETAILS.family.familyGroup})\nContact: ${EVENT_DETAILS.contact.phoneDisplay}`
  );
  const location = encodeURIComponent(
    `${EVENT_DETAILS.venue.name}, ${EVENT_DETAILS.venue.fullAddress}`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
