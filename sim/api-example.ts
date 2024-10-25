namespace pxsim.example {
    /**
     * Repeat the code forever in the background
     * @param body code to execute
     */
    //% blockId=example_block afterOnStart=true
    //% help=basic/forever weight=55
    //% block="show light %number| in %color"
    export function showLight (number: number, color: string): void {
        board().testStateNum = number
        board().testStateStr = color

        const lights = [
            { id: board().testStateNum, color: board().testStateStr}
        ];

        // ideja: uporabnik da notri seznam lučk in barvo (rgb konstrukt),
        // mi iz tega ustvarimo Lamp objekt in ga passamo v draw
        var spredaj: Lamp[] = [];
        
        


        draw()
        
    


    }
}
