import { Currencies } from '../enums/currencies';

type MoneyProps = { currency: Currencies; value: number };

export default function Money(props: MoneyProps) {
    const { currency, value } = props;

    let currencyCharacter = '';
    switch (currency) {
        case Currencies.USD:
            currencyCharacter = '$';
            break;
    }
    return currencyCharacter + value;
}
