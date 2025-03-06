/**
 * Cal.com integration utilities
 *
 * This file provides functions for both:
 * 1. Direct embedding of Cal.com booking widgets (currently used)
 * 2. API integration with Cal.com (for future use if needed)
 *
 * It reads environment variables and provides helper functions and error handling.
 */

// ===== EMBEDDING CONFIGURATION (CURRENTLY USED) =====
// Cal.com username for direct embedding
const CAL_USERNAME = import.meta.env.VITE_CAL_USERNAME || "digitransinc";
// Cal.com event name for direct embedding
const CAL_EVENT_NAME = import.meta.env.VITE_CAL_EVENT_NAME || "demo-kozmoai";

// ===== API CONFIGURATION (FOR FUTURE USE) =====
// Base URL for Cal.com API
const CAL_BASE_URL =
  import.meta.env.VITE_CAL_BASE_URL || "https://api.cal.com/v1";
// Cal.com API key (should be set in environment variables)
const CAL_API_KEY = import.meta.env.VITE_CAL_API_KEY;
// Cal.com account ID (should be set in environment variables)
const CAL_ACCOUNT_ID = import.meta.env.VITE_CAL_ACCOUNT_ID;

/**
 * Check if Cal.com embedding credentials are properly configured
 */
export const isCalEmbedConfigured = (): boolean => {
  return Boolean(CAL_USERNAME && CAL_EVENT_NAME);
};

/**
 * Check if Cal.com API credentials are properly configured
 */
export const isCalApiConfigured = (): boolean => {
  return Boolean(CAL_API_KEY && CAL_ACCOUNT_ID);
};

/**
 * Get the Cal.com username for embedding
 */
export const getCalUsername = (): string => {
  return CAL_USERNAME;
};

/**
 * Get the Cal.com event name for embedding
 */
export const getCalEventName = (): string => {
  return CAL_EVENT_NAME;
};

/**
 * Fetch available time slots from Cal.com API
 * @param eventTypeId - The ID of the event type to fetch slots for
 * @param startDate - Start date for the range to fetch
 * @param endDate - End date for the range to fetch
 */
export const fetchAvailableSlots = async (
  eventTypeId: string,
  startDate: string,
  endDate: string,
) => {
  if (!isCalApiConfigured()) {
    throw new Error("Cal.com API is not properly configured");
  }

  try {
    const response = await fetch(
      `${CAL_BASE_URL}/availability/${eventTypeId}?startDate=${startDate}&endDate=${endDate}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CAL_API_KEY}`,
          "X-Cal-Account-Id": CAL_ACCOUNT_ID,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Cal.com API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Cal.com availability:", error);
    throw error;
  }
};

/**
 * Create a booking with Cal.com API
 * @param eventTypeId - The ID of the event type to book
 * @param startTime - Start time for the booking
 * @param endTime - End time for the booking
 * @param name - Name of the person booking
 * @param email - Email of the person booking
 * @param notes - Additional notes for the booking
 */
export const createBooking = async (
  eventTypeId: string,
  startTime: string,
  endTime: string,
  name: string,
  email: string,
  notes?: string,
) => {
  if (!isCalApiConfigured()) {
    throw new Error("Cal.com API is not properly configured");
  }

  try {
    const response = await fetch(`${CAL_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CAL_API_KEY}`,
        "X-Cal-Account-Id": CAL_ACCOUNT_ID,
      },
      body: JSON.stringify({
        eventTypeId,
        start: startTime,
        end: endTime,
        name,
        email,
        notes,
      }),
    });

    if (!response.ok) {
      throw new Error(`Cal.com API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating Cal.com booking:", error);
    throw error;
  }
};
