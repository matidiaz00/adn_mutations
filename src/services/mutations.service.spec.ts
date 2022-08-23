import { setDataDNA, isHorizontal, isVertical, oblicualLeftToRight, oblicualRightToLeft, mutation } from './mutations.service'
import { mutations_bad_examples, mutations_examples } from '../examples'

describe('MUTATIONS SERVICE', () => {

    test("Should response with a correct message type", () => {
        expect( setDataDNA(mutations_bad_examples.not_contain_dna).error_type ).toBe('not_contain_dna');
        expect( setDataDNA(mutations_bad_examples.bad_letters).error_type ).toBe('bad_letters');
        expect( setDataDNA(mutations_bad_examples.empty).error_type ).toBe('empty');
        expect( setDataDNA(mutations_bad_examples.not_length_6).error_type ).toBe('not_length_6');
        expect( setDataDNA(mutations_bad_examples.items_string_not_length_4).error_type ).toBe('items_string_not_length_4');
        expect( setDataDNA(mutations_bad_examples.is_not_Array).error_type ).toBe('is_not_Array');
    })

    test("Should response with a boolean", () => {
        expect(
            typeof isHorizontal(mutations_examples.is_horizontal.dna)
        ).toBe('boolean');
    })

    test("Should response with a boolean", () => {
        expect(
            typeof isHorizontal(mutations_examples.is_horizontal.dna)
        ).toBe('boolean');
        expect(
            typeof isVertical(mutations_examples.is_vertical.dna)
        ).toBe('boolean');
        expect(
            typeof oblicualLeftToRight(mutations_examples.oblicual_left_right.dna)
        ).toBe('boolean');
        expect(
            typeof oblicualRightToLeft(mutations_examples.oblicual_right_left.dna)
        ).toBe('boolean');
    })

    test("Mutation matches or not oblicual left to right", () => {
        expect(
            oblicualLeftToRight(mutations_examples.oblicual_left_right.dna)
        ).toBe(true);
        expect(
            oblicualLeftToRight(mutations_examples.oblicual_right_left.dna)
        ).toBe(false);
        expect(
            oblicualLeftToRight(mutations_examples.is_vertical.dna)
        ).toBe(false);
        expect(
            oblicualLeftToRight(mutations_examples.is_horizontal.dna)
        ).toBe(false);
    })

    test("Mutation matches or not oblicual right to left", () => {
        expect(
            oblicualRightToLeft(mutations_examples.oblicual_left_right.dna)
        ).toBe(false);
        expect(
            oblicualRightToLeft(mutations_examples.oblicual_right_left.dna)
        ).toBe(true);
        expect(
            oblicualRightToLeft(mutations_examples.is_vertical.dna)
        ).toBe(false);
        expect(
            oblicualRightToLeft(mutations_examples.is_horizontal.dna)
        ).toBe(false);
    })

    test("Mutation matches or not hotizontaly", () => {
        expect(
            isHorizontal(mutations_examples.oblicual_left_right.dna)
        ).toBe(false);
        expect(
            isHorizontal(mutations_examples.oblicual_right_left.dna)
        ).toBe(false);
        expect(
            isHorizontal(mutations_examples.is_vertical.dna)
        ).toBe(false);
        expect(
            isHorizontal(mutations_examples.is_horizontal.dna)
        ).toBe(true);
    })

    test("Mutation matches or not verticaly", () => {
        expect(
            isVertical(mutations_examples.oblicual_left_right.dna)
        ).toBe(false);
        expect(
            isVertical(mutations_examples.oblicual_right_left.dna)
        ).toBe(false);
        expect(
            isVertical(mutations_examples.is_vertical.dna)
        ).toBe(true);
        expect(
            isVertical(mutations_examples.is_horizontal.dna)
        ).toBe(false);
    })


})