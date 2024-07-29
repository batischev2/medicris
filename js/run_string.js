var styles = {
  "background-color": "rgba(8, 229, 190, 0.5",
  "font-family": "Montserrat",
  "font-size": "12px",
  "font-weight": "700",
  "line-height": "14px",
  "letter-spacing": "0.1em",
  "text-align": "left",
  height: "42px",
  padding: "12px 0",
};

$(function () {
  var marquee = $("#marquee-1");
  marquee.css(styles);
  marquee.css({ overflow: "hidden", width: "150%" });
  marquee.wrapInner("<span>");
  marquee
    .find("span")
    .css({ width: "50%", display: "inline-block", "text-align": "center" });
  marquee.append(marquee.find("span").clone());
  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "200%");
  var reset = function () {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-100%" }, 12000, "linear", reset);
  };
  reset.call(marquee.find("div"));
});

$(function () {
  var marquee = $("#marquee-2");
  marquee.css(styles);
  marquee.css({ overflow: "hidden", width: "110%" });
  marquee.wrapInner("<span>");
  marquee
    .find("span")
    .css({ width: "50%", display: "inline-block", "text-align": "center" });
  marquee.append(marquee.find("span").clone());
  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "160%");
  var reset = function () {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-80%" }, 12000, "linear", reset);
  };
  reset.call(marquee.find("div"));
});

$(function () {
  var marquee = $("#marquee-3");
  marquee.css(styles);
  marquee.css({ overflow: "hidden", width: "122%" });
  marquee.wrapInner("<span>");
  marquee
    .find("span")
    .css({ width: "50%", display: "inline-block", "text-align": "center" });
  marquee.append(marquee.find("span").clone());
  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "172%");
  var reset = function () {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-86%" }, 12000, "linear", reset);
  };
  reset.call(marquee.find("div"));
});

$(function () {
  var marquee = $("#marquee-4");
  marquee.css(styles);
  marquee.css({ overflow: "hidden", width: "154%" });
  marquee.wrapInner("<span>");
  marquee
    .find("span")
    .css({ width: "50%", display: "inline-block", "text-align": "center" });
  marquee.append(marquee.find("span").clone());
  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "254%");
  var reset = function () {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-127%" }, 12000, "linear", reset);
  };
  reset.call(marquee.find("div"));
});
