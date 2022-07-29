import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right'))
  ]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'fixed',
        top: 0,
        bottom: 0,
        [direction]: 0,
        width: '100%',
        overflow: 'hidden',
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('800ms ease', style({ [direction]: '100%' }))
      ], optional),
      query(':enter', [
        animate('800ms ease', style({ [direction]: '0%' }))
      ])
    ]),
  ];
}
