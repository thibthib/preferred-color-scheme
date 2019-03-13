/**
 * Corresponds to the different values of the "prefers-color-scheme" CSS media feature
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 */
export enum ColorScheme {
    dark = 'dark',
    light = 'light',
    noPreference = 'no-preference'
}

/**
 * Calculate which ColorScheme is the user's preferred one
 * @returns name:preferedColorScheme
 */
export const getPreferredColorScheme = (): ColorScheme => {
    const preferred = Object.values(ColorScheme).find(
        colorScheme =>
            window.matchMedia(`(prefers-color-scheme: ${colorScheme})`).matches
    );

    // when there's no browser support we assume 'no-preference'
    return preferred === null ? ColorScheme.noPreference : preferred;
};
