import Typograf from "typograf";

export const TypografText = props => {
    const tp = new Typograf({locale: ['ru']});
    return tp.execute(props);
}
