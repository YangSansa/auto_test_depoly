import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from '@jest/globals'
//test和it都可以测试
import { sum } from './math'

describe('math test', () => {
    beforeAll(() => {
        console.log('beforeAll')
    })
    beforeEach(() => {
        console.log('beforeEach')
    })
    test('sum test', () => {
        expect(sum(1,1)).toBe(2)
    })
    /* test('sum test2', () => {
        expect(sum(1,3)).toBe(2)
    }) */
    afterAll(() => {
        console.log('afterAll')
    })
    afterEach(() => {
        console.log('afterEach')
    })

    test('tobe or toequal', () => {
        const x = { a:{b:1}}
        const y = { a:{b:1}}
        // expect(x).toBe(y)
        expect(x).toEqual(y)
    })

    
})