import React from "react";

import { ICONS } from "./constants";
import { TiPin, TiThermometer } from "react-icons/ti";
import { IoIosMegaphone, IoIosChatbubbles, IoIosBulb } from "react-icons/io";
import { GiCampfire } from "react-icons/gi";

import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

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
      return <TiThermometer {...rest} />;

    case ICONS.THUMBS_UP:
      return <FaRegThumbsUp {...rest} />;

    case ICONS.THUMBS_DOWN:
      return <FaRegThumbsDown {...rest} />;
    default:
      return null;
  }
};
