import { data } from './data';

export function load({ params }) {
    return {
        questions: data.map((val) => ({
            slug: val.id,
            question: val.question,
            answer: val.answer
        })),
        slug: params.slug
    };
}
