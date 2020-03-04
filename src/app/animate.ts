import {
    trigger, state, style, transition,
    animate
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'visibility': 'visible'
        })),
        state('out', style({
            'visibility': 'hidden',
            'max-height': '0',
        })),
        transition('out => *', [
            animate('400ms ease-out')
        ]
        ),
        transition('* => out', [
            animate('200ms')])
    ]),
]


export const SlideInLeft = [
    trigger('slideInLeft', [
        state('void', style({
            'transform': 'translateX(-50px)'
        })),
        transition('void => *', [
            animate('900ms ease-out')
        ]
        )
    ]),
]



export const SlideInRight = [
    trigger('slideInRight', [
        state('void', style({
            'transform': 'translateX(50px)'
        })),
        state('*', style({
            'transform': 'translateX(0px)'
        })),
        transition('void => *', [
            animate('900ms ease-out')
        ]
        )
    ]),
]





