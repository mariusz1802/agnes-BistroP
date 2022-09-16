import React from "react";
import HowItWorksImage from "../assets/images/sprzedamszkode/howItWorksImg.svg";
import Money from "../assets/images/sprzedamszkode/money.svg";

import * as styles from "../components/HowItWorks/HowItWorks.module.scss";
export const myObjects = {
  howItWorks: {
    image: <HowItWorksImage className={styles.ImageLeft} />,
    title: "Jak to działa...?",
    desc: ` To bardzo proste! Wysyłasz do nas potrzebne dokumenty, a my oceniamy ile
        możemy zapłacić za Twoją szkodę. Pieniądze otrzymasz w ciągu 48 godzin
        od podpisania umowy. Wycena dopłaty do szkody jest całkowicie bezpłatna,
        więc nic na tym nie tracisz. Średnia wysokość dopłaty to ponad 2 tys.
        zł. Możliwość ubiegania się o odszkodowanie wynosi do 3 lat, więc jeśli
        w tym okresie miałeś jakąś szkodę skontaktuj się z nami. Jeśli nie
        jesteś pewny, czy należy Ci się odszkodowanie z tytułu kolizji możemy to
        skonsultować. Twoje dane są całkowicie bezpieczne dzięki protokołowi SSL
        użytemu na stronie.`,
  },
  stats: {
    title: "Statystyki..",
  },
  howMuch: {
    title: "Ile mogę dostać...?",
    image: <Money className={styles.ImageRight} />,
    desc: `Wszystko zależy od szkody na pojeździe jakie zostały wykonane i od wyliczeń
    rzeczoznawcy z ubezpieczalni, który oszacował szkodę. Aby dokładnie dowiedzieć
    się ile możesz otrzymać dopłaty za szkodę z OC sprawcy prześlij do nas  formularz
    zgłoszeniowy. Jeśli nie jakie pliki są potrzebne do ocenienia Twojej szkody wyślij
    dane kontaktowe a nasz doradca skontaktuje się z Tobą. Możesz zadzwonić również
    osobiście na numer 666-742-743 i zapytać o szczegóły. Jeśli chcesz, aby doradca
    się z Tobą skontaktował, użyj przycisku poniżej aby wypełnić formularz.
    `,
  },
};
