import { ChainWalletBase } from '../../bases';
import { ChainRecord, Wallet } from '../../types';

export class ChainIframe extends ChainWalletBase {
  constructor(walletInfo: Wallet, chainInfo: ChainRecord) {
    super(walletInfo, chainInfo);
  }
}
