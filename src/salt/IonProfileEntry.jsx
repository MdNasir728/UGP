import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import DataInput from '@/components/DataInput';
import { Input } from '@/components/ui/input';


class IonProfileEntry extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = props.classNames;
    this.handleIonChange = this.handleIonChange.bind(this);
  };

  handleIonChange(event, ion) {
    if (this.props.onIonChange !== undefined && this.props.onIonChange !== null) {
      this.props.onIonChange(event.target.value, ion);
    } else {
      throw new Error('Missing onIonChange prop');
    }
  };

  render() {
    const classNames = [this.classNames, 'IonEntry'].join(' ')
    const ions = ['calcium', 'magnesium', 'sodium', 'sulfate', 'chloride', 'bicarbonate'];

    return (
      <div className={`${classNames} grid grid-cols-3 gap-4`} >
        {ions.map((ion) => (
          <div key={ion} className='w-full p-2 space-y-1 '>
            <h5>{ion.charAt(0).toUpperCase() + ion.slice(1)} (ppm)</h5>

            <Input
              className='bg-[#262730] overflow-hidden text-white'
              type='number'
              min={0.0}
              value={this.props.state[ion]}
              onChange={e => this.handleIonChange(e, ion)}
              required
              fullWidth
            />
          </div>
        ))}
      </div>
    );
  }
};

export default IonProfileEntry;