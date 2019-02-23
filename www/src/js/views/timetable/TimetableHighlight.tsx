import * as React from 'react';
import classnames from 'classnames';
import { isEqual } from 'lodash';

import { ModifiableLesson } from 'types/modules';
import { HoverLesson } from 'types/timetables';
import { OnHoverCell } from 'types/views';

import { formatWeekNumber, getHoverLesson, LESSON_TYPE_ABBREV } from 'utils/timetables';
import elements from 'views/elements';

import styles from './TimetableHighlight.scss';

type Props = {
  onHover: OnHoverCell;
  style?: React.CSSProperties;
  onClick?: () => void;
  hoverLesson?: HoverLesson | null;
};

/**
 * Smallest unit in timetable.
 * Representing a lesson in this case. In future we
 * might explore other representations e.g. grouped lessons
 */
function TimetableHighlight(props: Props) {

}

export default TimetableHighlight;
