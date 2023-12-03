'use client';
import { Edit } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../Theme';
import { Routes } from '../enums/routes';
import { ProfileFormInputs } from '../interfaces/ProfileFormInputs';
import { selectUserState } from '../state/userState.slice';

export default function Profile() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>();
  const dispatch = useDispatch();
  const router = useRouter();

  const villainName = useSelector(selectUserState).villainName;

  if (!villainName) {
    router.push(Routes.ROOT);
  }

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
                {...register('villainName', { required: true })}
                inputRef={ref}
                onChange={onChange}
                defaultValue={villainName}
                fullWidth
                sx={{ backgroundColor: theme.palette.primary.main }}
              />
            )}
          />
          {errors.villainName && <span>This field is required</span>}
        </Grid>
        <Grid item xs={4}>
          <Edit />
        </Grid>
      </Grid>
    </form>
  );
}
