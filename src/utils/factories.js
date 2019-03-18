import React from "react";

import { ICONS } from "./constants";
import { TiPin } from "react-icons/ti";
import {
  IoIosMegaphone,
  IoMdTime,
  IoIosChatbubbles,
  IoIosBulb
} from "react-icons/io";
import { GiCampfire } from "react-icons/gi";

export const IconFactories = ({ icon, ...rest }) => {
  switch (icon) {
    case ICONS.POSTS:
      return <TiPin {...rest} />;

    case ICONS.TOPICS:
      return <IoIosMegaphone {...rest} />;

    case ICONS.REPLIES:
      return <GiCampfire {...rest} />;

    case ICONS.BALLOON:
      return <IoIosBulb {...rest} />;

    case ICONS.BALLOONS:
      return <IoIosChatbubbles {...rest} />;

    case ICONS.TIME:
      return <IoMdTime {...rest} />;
    default:
      return null;
  }
};
