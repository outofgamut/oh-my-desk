import React from 'react';
import { shallow } from 'enzyme';
import { shell } from 'electron';

import Update from '.';

describe('<Update />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<Update />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should test static handleOpenLink', () => {
    shell.openExternal = jest.fn();

    Update.handleOpenLink();

    expect(shell.openExternal).toHaveBeenCalledTimes(1);
    expect(shell.openExternal).toHaveBeenCalledWith('https://github.com/AhKi/oh-my-desk');
  });

  describe('should call handleUpdateCheck', () => {
    const onUpdateCheckOnManual = jest.fn();
    const wrapper = shallow(<Update onUpdateCheckOnManual={onUpdateCheckOnManual} />);

    it('when props isUpdateCheckFetch === true', () => {
      wrapper.setProps({ isUpdateCheckFetch: true });

      wrapper.instance().handleUpdateCheck();
      expect(onUpdateCheckOnManual).toHaveBeenCalledTimes(0);
    });

    it('when props isUpdateCheckFetch === false', () => {
      wrapper.setProps({ isUpdateCheckFetch: false });

      wrapper.instance().handleUpdateCheck();
      expect(onUpdateCheckOnManual).toHaveBeenCalledTimes(1);
      expect(onUpdateCheckOnManual).toHaveBeenCalledWith();
    });
  });
});
