(() => {
    const ACTIVE_CLASS = 'active';

    const nodes = document.querySelectorAll('.js-text-input-node');

    nodes.forEach((node) => {
        const input = node.querySelector('.js-text-input');
        const reset = node.querySelector('.js-text-input-reset');
        const alert = node.querySelector('.js-text-input-alert');

        if (input.value !== '') {
            reset?.classList.add(ACTIVE_CLASS);
        }

        input?.addEventListener('blur', (event) => {
            if (event.target.value === '') {
                alert?.classList.add(ACTIVE_CLASS);
            } else {
                alert?.classList.remove(ACTIVE_CLASS);
            }
        });

        input?.addEventListener('input', (event) => {
            if (event.target.value === '') {
                reset?.classList.remove(ACTIVE_CLASS);
            } else {
                reset?.classList.add(ACTIVE_CLASS);
                alert?.classList.remove(ACTIVE_CLASS);
            }
        });

        reset?.addEventListener('click', () => {
            if (input) {
                input.value = '';
                reset?.classList.remove(ACTIVE_CLASS);
            }
        });
    });
})();

(() => {
    const TOOLTIP_LEFT_CLASS = 'tooltip_left';
    const TOOLTIP_BOTTOM_CLASS = 'tooltip_bottom';

    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('resize', initTooltip);
        initTooltip();
    });

    function initTooltip() {
        const triggers = document.querySelectorAll('.js-tooltip-trigger');

        triggers?.forEach((trigger) => {
            const tooltip = trigger.querySelector('.js-tooltip');

            if (tooltip) {
                adjustTooltipPosition(trigger, tooltip);
            }
        });
    }

    function adjustTooltipPosition(trigger, tooltip) {
        tooltip.classList.remove(TOOLTIP_LEFT_CLASS);
        tooltip.classList.remove(TOOLTIP_BOTTOM_CLASS);

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const tooltipRect = tooltip.getBoundingClientRect();

        const tooltipRightPointX = tooltipRect.left + tooltipRect.width;
        const tooltipTopPointY = tooltipRect.top;

        if (tooltipRightPointX > viewportWidth) {
            tooltip.classList.add(TOOLTIP_LEFT_CLASS);
        }

        if (tooltipTopPointY < 0) {
            tooltip.classList.add(TOOLTIP_BOTTOM_CLASS);
        }
    }
})();

//# sourceMappingURL=index.js.map
