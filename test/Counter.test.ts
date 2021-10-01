import { ethers, deployments, getNamedAccounts, getUnnamedAccounts } from 'hardhat'
import { expect } from './chai-setup'
import { Counter } from '../typechain'

describe("Counter", () => { 
  let counter: Counter;
  beforeEach(async () => {
    await deployments.fixture(["Counter"],);
    const { deployer } = await getNamedAccounts();
    counter = (await ethers.getContract("Counter")) as Counter;
    const initialCount = await counter.getCount();
    expect(initialCount).to.eq(5);
  });
  describe("count up", async () => {
    it("should count up", async () => {
      await counter.countUp();
      let count = await counter.getCount();
      expect(count).to.eq(6);
    });
  });
  describe("count down", async () => {
    it("should count down", async () => {
      // this test will fail
      await counter.countDown();
      const count = await counter.getCount();
      expect(count).to.eq(4);
    });
  });
});