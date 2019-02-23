export type DayText = string; // E.g. "Monday", "Tuesday"
export type StartTime = string; // E.g. "1400"
export type EndTime = string; // E.g. "1500"

/**
 * Represents a time period in the timetable.
 */
export type TimePeriod = {
  DayText: DayText;
  StartTime: StartTime;
  EndTime: EndTime;
};

/**
 * Represents a time period with a specified color in the timetable.
 */
export type ColoredTimePeriod = TimePeriod & {
  colorIndex: number;
};

/**
 * Returns a generic time period with some default parameter values, if they are not specified.
 */
export function createGenericTimePeriod(
  dayText: DayText = 'Monday',
  startTime: StartTime = '0800',
  endTime: EndTime = '1000',
): TimePeriod {
  return {
    DayText: dayText,
    StartTime: startTime,
    EndTime: endTime,
  };
}

/**
 * Returns a generic colored time period with some default parameter values, if they are not specified.
 */
export function createGenericColoredTimePeriod(
  dayText?: DayText,
  startTime?: StartTime,
  endTime?: EndTime,
  colorIndex: number = 0,
): ColoredTimePeriod {
  return {
    ...createGenericTimePeriod(dayText, startTime, endTime),
    colorIndex,
  };
}
