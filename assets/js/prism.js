import Prism from "prismjs";

{{ range $.Site.Params.prism.languages }}
  import "node_modules/prismjs/components/prism-{{ . }}";
{{ end }}

{{ range $.Site.Params.prism.plugins }}
  import "node_modules/prismjs/plugins/{{ . }}/prism-{{ . }}";
{{ end }}

Prism.highlightAll();
