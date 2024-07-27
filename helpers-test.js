describe('Helpers', function() {
    it('should format numbers as currency', function() {
        expect(formatCurrency(1234.5)).toBe('$1234.50');
        expect(formatCurrency(0)).toBe('$0.00');
        expect(formatCurrency(0.99)).toBe('$0.99');
    });
});