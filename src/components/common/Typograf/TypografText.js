import Typograf from "typograf";

export const TypografText = props => {
    const tp = new Typograf({locale: ['ru', 'en-US']});
    return tp.execute(props);
}
