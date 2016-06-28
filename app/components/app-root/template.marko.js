function create(__helpers) {
  var __widgetType = {
          name: "/omneo$1.0.0/app/components/app-root/index",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget = __loadTag(require("marko-widgets/taglib/widget-tag")),
      attr = __helpers.a,
      attrs = __helpers.as,
      app_header = __loadTag(require("../app-header"));

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div class=\"wrapper\"" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "> ");

          app_header({
              user: data.user
            }, out);

          out.w(" </div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
