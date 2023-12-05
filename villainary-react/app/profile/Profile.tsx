'use client';
import { Check, Edit } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../Theme';
import { Routes } from '../enums/routes';
import { ProfileFormInputs } from '../interfaces/ProfileFormInputs';
import { selectUserState, setVillainName } from '../state/userState.slice';

export default function Profile() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>();
  const dispatch = useDispatch();
  const router = useRouter();

  const [editModeToggled, setEditModeToggled] = useState(false);

  const villainName = useSelector(selectUserState).villainName;
  const [tempVillainName, setTempVillainName] = useState(villainName);

  if (!villainName) {
    router.push(Routes.ROOT);
  }

  const toggleEditModeOn = () => {
    setEditModeToggled(true);
  };
  const toggleEditModeOff = () => {
    setEditModeToggled(false);
  };

  const changeName = (syntheticEvent: SyntheticEvent) => {
    setTempVillainName((syntheticEvent.target as HTMLInputElement).value);
  };

  const handleVillainNameUpdate = () => {
    toggleEditModeOff();
    dispatch(setVillainName(tempVillainName));
  };

  return (
    <form>
      <Grid
        className="pb-8 pt-8"
        container
        rowSpacing={1}
        columnSpacing={3}
        alignItems="center"
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        <Grid item xs={8}>
          <Controller
            control={control}
            name="villainName"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                {...register('villainName', {
                  required: 'This field is required',
                })}
                inputRef={ref}
                onChange={(value) => {
                  onChange(value);
                  changeName(value);
                }}
                defaultValue={villainName}
                fullWidth
                disabled={!editModeToggled}
                sx={{ backgroundColor: theme.palette.primary.main }}
              />
            )}
          />
          {<span>{errors.villainName?.message}</span>}
        </Grid>
        <Grid item xs={4}>
          {editModeToggled ? (
            <Check onClick={handleVillainNameUpdate} />
          ) : (
            <Edit onClick={toggleEditModeOn} />
          )}
        </Grid>
      </Grid>
    </form>
  );
}
