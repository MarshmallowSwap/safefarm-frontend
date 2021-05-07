import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'TOFY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6f73FF29E47C0F49d6Db7EF4B2CE9393256a7C7A',
    },
    tokenSymbol: 'TOFY',
    tokenAddresses: {
      97: '',
      56: '0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'TOFY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x753f40F5CdeB085AD4540Dd02a1c0c712EaF51F6',
    },
    tokenSymbol: 'TOFY',
    tokenAddresses: {
      97: '',
      56: '0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 16,
    risk: 5,
    lpSymbol: 'TOFY-MASH LP',
    lpAddresses: {
      97: '',
      56: '0xc36e93F6D92be42E2eAFB009dF74a0eBFeD5c0C2',
    },
    tokenSymbol: 'TOFY',
    tokenAddresses: {
      97: '',
      56: '0x3c00f8fcc8791fa78daa4a480095ec7d475781e2',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.mash,
  },
  {
    pid: 18,
    risk: 5,
    lpSymbol: 'DOGE-MASH LP',
    lpAddresses: {
      97: '',
      56: '0xa624375e27667451BBE0797Ff85F877762Ee44f5',
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      56: '0x3c00f8fcc8791fa78daa4a480095ec7d475781e2',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.mash,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'SAFEMOON-MASH LP',
    lpAddresses: {
      97: '',
      56: '0x4c531561129C919373e3AC4C9C06eF726a34e51F',
    },
    tokenSymbol: 'SAFEMOON',
    tokenAddresses: {
      97: '',
      56: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.mash,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'SAFEMARS-MASH LP',
    lpAddresses: {
      97: '',
      56: '0xfa3167241d1064de9175a40e74ef245198aeb992',
    },
    tokenSymbol: 'SAFEMARS',
    tokenAddresses: {
      97: '',
      56: '0x3ad9594151886ce8538c1ff615efa2385a8c3a88',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.mash,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'ELONGATE-MASH LP',
    lpAddresses: {
      97: '',
      56: '0x2364CFE037e20812e1D687AC24176EfB3Bb10cC2',
    },
    tokenSymbol: 'ELONGATE',
    tokenAddresses: {
      97: '',
      56: '0x2A9718defF471f3Bb91FA0ECEAB14154F150a385',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.mash,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'SAFEGALAXY-MASH LP',
    lpAddresses: {
      97: '',
      56: '0x79c12A4AE1Df27D2cB5c79f383eE2ECbBa5C94D1',
    },
    tokenSymbol: 'SAFEGALAXY',
    tokenAddresses: {
      97: '',
      56: '0x6b51231c43B1604815313801dB5E9E614914d6e4',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.mash,
  },
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'SAFESTAR-MASH LP',
    lpAddresses: {
      97: '',
      56: '0x5616C8C42B0CCfcA3279B50E0B441E6201304845',
    },
    tokenSymbol: 'SAFESTAR',
    tokenAddresses: {
      97: '',
      56: '0x3c00f8fcc8791fa78daa4a480095ec7d475781e2',
    },
    quoteTokenSymbol: QuoteToken.MASH,
    quoteTokenAdresses: contracts.mash,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'TOFY',
    lpAddresses: {
      97: '',
      56: '0x6f73FF29E47C0F49d6Db7EF4B2CE9393256a7C7A',
    },
    tokenSymbol: 'TOFY',
    tokenAddresses: {
      97: '',
      56: '0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MASH',
    lpAddresses: {
      97: '',
      56: '0x87c182edb12f74d561519ab586205fe6cd75363a',
    },
    tokenSymbol: 'MASH',
    tokenAddresses: {
      97: '',
      56: '0x787732f27d18495494cea3792ed7946bbcff8db2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SAFEMOON',
    lpAddresses: {
      97: '',
      56: '0xfB7DEb2236815222113D949d935cCA4901531677',
    },
    tokenSymbol: 'SAFEMOON',
    tokenAddresses: {
      97: '',
      56: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SAFEMARS',
    lpAddresses: {
      97: '',
      56: '0x620B975e49B5b8f7b24ac8aB2Fa2450a0f6b6004',
    },
    tokenSymbol: 'SAFEMARS',
    tokenAddresses: {
      97: '',
      56: '0x3ad9594151886ce8538c1ff615efa2385a8c3a88',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ELONGATE',
    lpAddresses: {
      97: '',
      56: '0xDcBD1aB9E1e2A4DE2fA1f95145B942316851451b',
    },
    tokenSymbol: 'ELONGATE',
    tokenAddresses: {
      97: '',
      56: '0x2A9718defF471f3Bb91FA0ECEAB14154F150a385',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SAFEGALAXY',
    lpAddresses: {
      97: '',
      56: '0x6cc655c67eEB1dfcEFf36ed38E03ee4f0fE6A9A7',
    },
    tokenSymbol: 'SAFEGALAXY',
    tokenAddresses: {
      97: '',
      56: '0x6b51231c43B1604815313801dB5E9E614914d6e4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SAFESTAR',
    lpAddresses: {
      97: '',
      56: '0x315c31B92a70f5f47B1f23942d08F1d123B11ADD',
    },
    tokenSymbol: 'SAFESTAR',
    tokenAddresses: {
      97: '',
      56: '0x3c00f8fcc8791fa78daa4a480095ec7d475781e2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  

]

export default farms