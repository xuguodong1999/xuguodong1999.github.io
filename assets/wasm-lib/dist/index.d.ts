declare class XgdChemWrapper {
    private static chem;
    static smi2svg(smi: string): Promise<string>;
    static convert(param: {
        input: string;
        inputFormat: string;
        outputFormat: string;
        gen2D: boolean;
        gen3D: boolean;
    }): Promise<string>;
    static clean(): void;
}
export { XgdChemWrapper };
