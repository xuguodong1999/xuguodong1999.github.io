declare class XgdChemWrapper {
    private static chem;
    static smi2svg(smi: string): Promise<string>;
    static clean(): void;
}
export { XgdChemWrapper };
