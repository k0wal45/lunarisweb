// Wspólne kształty treści używane przez dane w lib/ i komponenty, które je wyświetlają.

/** pytanie i odpowiedź (components/Faq) */
export type FaqItem = { q: string; a: string };

/** pojęcie z opisem (components/Split → TermList) */
export type TermItem = { term: string; text: string };

/** pozycja metryczki; bez wartości nie jest pokazywana (components/FactList) */
export type Fact = { label: string; value: string | null | undefined };

/** tytuł z opisem (components/StepGrid, listy zasad) */
export type TextItem = { title: string; text: string };
