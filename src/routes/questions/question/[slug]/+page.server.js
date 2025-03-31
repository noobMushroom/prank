import { data } from '../data';

export function load({ params }) {
    const question = data.find((question) => question.id == params.slug);
    return {
        question
    };
}
