import template from './tooltip.html';

export default function TooltipDirective() {
  return {
    restrict: 'A',
    scope: true,
    link: (scope, element, attrs) => {
      'ngInject';

      scope.isShown = false;
      scope.text = attrs.tooltip;

      // TODO: Not sure if manually calling $apply() is an Angular
      // best-practive, but I wanted to have the tooltip directive
      // to be as reusable as possible, and not coupled to the
      // parent hover events.
      element.parent().bind('mouseenter', () => {
        scope.$apply(() => { scope.isShown = true; });
      });

      element.parent().bind('mouseleave', () => {
        scope.$apply(() => { scope.isShown = false; });
      });
    },
    transclude: true,
    template,
  };
}
