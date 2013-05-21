var lists = require('../lists.js')
var tapTest = require('tap').test

function testProblem(num, test) {
  var testName = 'problem' + num
  tapTest(testName
       , {parallel: true}
       , function(t) {
          test(t, lists[testName])
       })
}

testProblem(6,  function(t, p6) {

  t.ok(p6(['x', 'a', 'm', 'a', 'x']))
  t.ok(p6([1,2,4,8,16,8,4,2,1]))
  t.ok(p6("madamimadam"))

  t.equal(p6([1,2,3]) , false)
  t.equal(p6("not"), false)

  t.end()
})

testProblem(7,  function(t, p7) {

  t.deepEqual(p7([1, [2, [3, 4], 5]])
            , [1, 2, 3, 4, 5])

  t.deepEqual(p7([1, 2, 3, 4, 5])
            , [1, 2, 3, 4, 5])

  t.end()
})

testProblem(8,  function(t, p8) {

  t.equal(p8('aaabbbccc')
          , 'abc')
  t.equal(p8('abc')
          , 'abc')
  t.equal(p8('aaabccc')
          , 'abc')
  t.equal(p8('abbbc')
          , 'abc')
  t.equal(p8('')
          , '')
  t.deepEqual(p8([1,1,1,2,2,2,3,3,3])
          , [1,2,3])
  t.deepEqual(p8([1,2,3])
          , [1,2,3])
  t.deepEqual(p8([1,1,1,2,3,3,3])
          , [1,2,3])
  t.deepEqual(p8([1,2,2,2,3])
          , [1,2,3])
  t.deepEqual(p8([1,1,1,2,2,2,3,3,3])
          , [1,2,3])
  t.deepEqual(p8([])
              ,[])

  t.end()
})

testProblem(9, function(t, p9) {

  t.deepEqual(p9(['a', 'a', 'a', 'a'
                , 'b'
                , 'c', 'c'
                , 'a', 'a'
                , 'd'
                , 'e', 'e', 'e', 'e'])
             , [ ['a', 'a', 'a', 'a']
               , ['b']
               , ['c', 'c']
               , ['a', 'a']
               , ['d']
               , ['e', 'e', 'e', 'e']])

  t.deepEqual(p9(['a', 'a', 'a', 'a'
                , 'b'
                , 'c', 'c'
                , 'a', 'a'
                , 'd'])
             , [ ['a', 'a', 'a', 'a']
               , ['b']
               , ['c', 'c']
               , ['a', 'a']
               , ['d']])

  t.deepEqual(p9('aaaabccaadeeee')
             , [ ['a', 'a', 'a', 'a']
               , ['b']
               , ['c', 'c']
               , ['a', 'a']
               , ['d']
               , ['e', 'e', 'e', 'e']])

  t.deepEqual(p9('abccaadeeee')
             , [ ['a']
               , ['b']
               , ['c', 'c']
               , ['a', 'a']
               , ['d']
               , ['e', 'e', 'e', 'e']])

  t.deepEqual(p9(''), [])
  t.deepEqual(p9([]), [])

  t.end()
})

testProblem(10, function (t, p10) {

  t.deepEqual(p10(['a', 'a', 'a', 'a'
                , 'b'
                , 'c', 'c'
                , 'a', 'a'
                , 'd'
                , 'e', 'e', 'e', 'e'])
             , [ [4, 'a']
               , [1, 'b']
               , [2, 'c']
               , [2, 'a']
               , [1, 'd']
               , [4, 'e']])

  t.deepEqual(p10(['a', 'a', 'a', 'a'
                , 'b'
                , 'c', 'c'
                , 'a', 'a'
                , 'd'])
             , [ [4, 'a']
               , [1, 'b']
               , [2, 'c']
               , [2, 'a']
               , [1, 'd']])

  t.deepEqual(p10('aaaabccaadeeee')
             , [ [4, 'a']
               , [1, 'b']
               , [2, 'c']
               , [2, 'a']
               , [1, 'd']
               , [4, 'e']])

  t.deepEqual(p10('abccaadeeee')
             , [ [1, 'a']
               , [1, 'b']
               , [2, 'c']
               , [2, 'a']
               , [1, 'd']
               , [4, 'e']])

  t.deepEqual(p10(''), [])
  t.deepEqual(p10([]), [])

  t.end()

})

testProblem(11, function (t, p11) {

  t.deepEqual(p11(['a', 'a', 'a', 'a'
                , 'b'
                , 'c', 'c'
                , 'a', 'a'
                , 'd'
                , 'e', 'e', 'e', 'e'])
             , [ [4, 'a']
               , 'b'
               , [2, 'c']
               , [2, 'a']
               , 'd'
               , [4, 'e']])

  t.deepEqual(p11(['a', 'a', 'a', 'a'
                , 'b'
                , 'c', 'c'
                , 'a', 'a'
                , 'd'])
             , [ [4, 'a']
               , 'b'
               , [2, 'c']
               , [2, 'a']
               , 'd'])

  t.deepEqual(p11('aaaabccaadeeee')
             , [ [4, 'a']
               , 'b'
               , [2, 'c']
               , [2, 'a']
               , 'd'
               , [4, 'e']])

  t.deepEqual(p11('abccaadeeee')
             , [ 'a'
               , 'b'
               , [2, 'c']
               , [2, 'a']
               , 'd'
               , [4, 'e']])

  t.deepEqual(p11(''), [])
  t.deepEqual(p11([]), [])

  t.end()

})

testProblem(12, function (t, p12) {

  t.deepEqual(p12([[4, 'a']
                 , 'b'
                 , [2, 'c']
                 , [2, 'a']
                 , 'd'
                 , [4, 'e']])
            , 'aaaabccaadeeee')

  t.deepEqual(p12([[4, 'a']
                 , 'b'
                 , [2, 'c']
                 , [2, 'a']
                 , 'd'])
             , 'aaaabccaad')

  t.deepEqual(p12(['a'
                 , 'b'
                 , [2, 'c']
                 , [2, 'a']
                 , 'd'
                 , [4, 'e']])
           , 'abccaadeeee')

  t.deepEqual(p12([]), '')

  t.end()

})

testProblem(13, function (t, p13) {

  t.deepEqual(p13(['a', 'a', 'a', 'a'
                , 'b'
                , 'c', 'c'
                , 'a', 'a'
                , 'd'
                , 'e', 'e', 'e', 'e'])
             , [ [4, 'a']
               , 'b'
               , [2, 'c']
               , [2, 'a']
               , 'd'
               , [4, 'e']])

  t.deepEqual(p13(['a', 'a', 'a', 'a'
                , 'b'
                , 'c', 'c'
                , 'a', 'a'
                , 'd'])
             , [ [4, 'a']
               , 'b'
               , [2, 'c']
               , [2, 'a']
               , 'd'])

  t.deepEqual(p13('aaaabccaadeeee')
             , [ [4, 'a']
               , 'b'
               , [2, 'c']
               , [2, 'a']
               , 'd'
               , [4, 'e']])

  t.deepEqual(p13('abccaadeeee')
             , [ 'a'
               , 'b'
               , [2, 'c']
               , [2, 'a']
               , 'd'
               , [4, 'e']])

  t.deepEqual(p13(''), [])
  t.deepEqual(p13([]), [])

  t.end()

})

testProblem(14, function (t, p14) {

  t.equal(p14('asdf'), 'aassddff')
  t.equal(p14('aa'), 'aaaa')
  t.equal(p14(''), '')

  t.deepEqual(p14([1, 2, 3, 4])
            , [1, 1, 2, 2, 3, 3, 4, 4])
  t.deepEqual(p14([1, 1])
            , [1, 1, 1, 1])
  t.deepEqual(p14([]), [])


  t.end()
})

testProblem(15, function (t, p15) {

  t.equal(p15('asdf', 2), 'aassddff')
  t.equal(p15('aa', 2), 'aaaa')
  t.equal(p15('', 2), '')

  t.deepEqual(p15([1, 2, 3, 4], 2)
            , [1, 1, 2, 2, 3, 3, 4, 4])
  t.deepEqual(p15([1, 1], 2)
            , [1, 1, 1, 1])
  t.deepEqual(p15([], 2), [])

  t.equal(p15('asdf', 1), 'asdf')
  t.equal(p15('asdf', 0), '')
  t.equal(p15('asdf'), '')

  t.equal(p15('asdf', 3), 'aaasssdddfff')

  t.end()
})

testProblem(16, function (t, p16) {

  t.equal(p16('asdf', 3), 'asf')
  t.equal(p16('asdf', 4), 'asd')
  t.equal(p16('asdf', 1), '')
  t.equal(p16('asdf', 0), 'asdf')
  t.equal(p16('asdf', 5), 'asdf')

  t.deepEqual(p16([1, 2, 3,4], 3)
            , [1, 2, 4])

  t.end()
})

testProblem(17, function(t, p17) {
  t.deepEqual(p17('asdf', 2)
            , ['as', 'df'])
  t.deepEqual(p17([1, 2, 3, 4], 2)
            , [[1, 2], [3, 4]])

  t.deepEqual(p17('asdf', 4)
            , ['asdf', ''])
  t.deepEqual(p17('asdf', 6)
            , ['asdf', ''])
  t.deepEqual(p17('asdf', 0)
            , ['', 'asdf'])
  t.deepEqual(p17('asdf')
            , ['', 'asdf'])

  t.deepEqual(p17([1, 2], 5)
            , [[1, 2], []])
  t.deepEqual(p17([1, 2])
            , [[], [1, 2]])

  t.end()
})

testProblem(18, function(t, p18) {
  t.equal(p18('asdf', 1, 2), 'as')
  t.equal(p18('asdf', 3, 4), 'df')
  t.equal(p18('asdf', 1, 4), 'asdf')
  t.equal(p18('asdf', 1, 6), 'asdf')

  t.deepEqual(p18([1, 2, 3, 4], 1, 2)
            , [1, 2])

  t.equal(p18('asdf', 3, 2), false)
  t.equal(p18('asdf'), false)
  t.equal(p18('asdf', 7, 8), false)

  t.end()
})

testProblem(19, function(t, p19) {
  t.deepEqual(p19([1, 2, 3, 4, 5, 6, 7, 8], 3)
            , [4, 5, 6, 7, 8, 1, 2, 3])
  t.deepEqual(p19([1, 2, 3, 4, 5, 6, 7, 8], -2)
            , [7, 8, 1, 2, 3, 4, 5, 6])
  t.deepEqual(p19([1, 2, 3], 5)
            , [3, 1, 2])
  t.deepEqual(p19([1, 2, 3], -5)
            , [2, 3, 1])

  t.deepEqual(p19([1, 2, 3], 0)
            , [1, 2, 3])

  t.end()
})

testProblem(20, function(t, p20) {
  t.deepEqual(p20('asdf', 2), ['s', 'adf'])
  t.deepEqual(p20('asdf', 1), ['a', 'sdf'])
  t.deepEqual(p20('asdf', 4), ['f', 'asd'])

  t.deepEqual(p20([4, 3, 2, 1], 2)
            , [3, [4, 2, 1]])

  t.equal(p20('asdf', 7), false)
  t.equal(p20('asdf'), false)
  t.equal(p20('asdf', 'a'), false)
  t.equal(p20('asdf', 0), false)

  t.end()
})

testProblem(21, function(t, p21) {

  t.equal(p21('X', 'asdf', 2), 'aXsdf')
  t.equal(p21('X', 'asdf', 1), 'Xasdf')
  t.equal(p21('X', 'asdf', 4), 'asdXf')
  t.equal(p21('X', 'asdf', 5), 'asdfX')
  t.equal(p21('X', 'asdf', 8), 'asdfX')

  t.deepEqual(p21(8, [1, 2, 3, 4], 2)
            , [1, 8, 2, 3, 4])
  t.deepEqual(p21([8, 9], [1, 2, 3, 4], 6)
            , [1, 2, 3, 4, 8 ,9])

  t.equal(p21('X', 'asdf', 0), false)
  t.equal(p21('X', 'asdf'), false)
  t.equal(p21('X', 'asdf', NaN), false)
  t.end()
})

testProblem(22, function(t, p22) {

  t.deepEqual(p22(1, 3)
            , [1, 2, 3])
  t.deepEqual(p22(4, 9)
            , [4, 5, 6, 7, 8, 9])
  t.deepEqual(p22(9, 4)
            , [9, 8, 7, 6, 5, 4])
  t.deepEqual(p22(-3, 0)
            , [-3, -2, -1, 0])
  t.deepEqual(p22(5, 5)
            , [5])

  t.deepEqual(p22('a', 'b'), false)

  t.end()
})
