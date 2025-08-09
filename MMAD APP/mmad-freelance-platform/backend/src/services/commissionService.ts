export class CommissionService {
    private commissionRate: number;

    constructor() {
        this.commissionRate = 0.10; // 10% commission
    }

    calculateCommission(amount: number): number {
        return amount * this.commissionRate;
    }

    processTransaction(amount: number): { netAmount: number; commission: number } {
        const commission = this.calculateCommission(amount);
        const netAmount = amount - commission;
        return { netAmount, commission };
    }
}