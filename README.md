# Read me

## Repo for reproducing the `RangeError: Trying to access beyond buffer length`

Related to [this issue](https://github.com/bpampuch/pdfmake/issues/2810) in the
[pdfmake](https://github.com/bpampuch/pdfmake) repository.

### Reproduction steps

1. `cd src`
2. `node ./main.js`
3. Result: `RangeError: Trying to access beyond buffer length` error.