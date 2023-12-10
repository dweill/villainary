export const trimWhitespaceValidator = (value: string) => {
    if (!value || !value.trim()) {
        return 'This field is required';
    }
    const trimmedValue = value.replace(/\s/g, '');
    if (!trimmedValue) {
        return 'This field is required';
    }
    return true;
};