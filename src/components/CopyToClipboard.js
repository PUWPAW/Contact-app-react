import React from "react";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";
import { useCopyToClipboard } from "react-use";
import { Button } from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((them) => ({
  buttonClipboard: {
    fontSize: "0.8rem",
    textTransform: "lowercase",
    fontWeight: "normal",
    whiteSpace: "nowrap",
  },
  tooltip: {
    fontSize: "10px !important",
    padding: "5px 8px !important",
  },
  icon: {
    fontSize: "small",
    marginRight: them.spacing(1),
  },
}));

const CopyToClipboard = ({ text }) => {
  const classes = useStyle();
  const [, copyToClipboard] = useCopyToClipboard();
  const tooltipRef = React.useRef();

  const copyAndHide = (txt, ref) => {
    copyToClipboard(txt);
    ReactTooltip.hide(ref);
  };

  return (
    <>
      <Button
        ref={tooltipRef}
        data-tip="Copied"
        data-type="info"
        data-effect="solid"
        data-event="click"
        data-delay-hide="1500"
        data-iscapture
        data-class={classes.tooltip}
        className={classes.buttonClipboard}
        onClick={() => copyAndHide(text, tooltipRef.current)}
      >
        <FileCopyOutlinedIcon className={classes.icon} /> {text}
      </Button>
      <ReactTooltip />
    </>
  );
};

CopyToClipboard.propTypes = {
  text: PropTypes.string,
};

export default CopyToClipboard;
