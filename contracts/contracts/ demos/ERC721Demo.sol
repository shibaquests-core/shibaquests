// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721Demo is ERC721 {
  uint256 private _nextTokenId;

  constructor() ERC721("MyNFT", "NFT") {}

  function mint(address _addr) public returns (uint256) {
    uint256 tokenId = _nextTokenId++;
    _mint(_addr, tokenId);
    return tokenId;
  }
}
