import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { theme } from './Theme';
import { IntakeFormInputs } from './interfaces/IntakeFormInputs';
import { setVillainName } from './state/userState.slice';

export default function VillainIntakeForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IntakeFormInputs>();

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IntakeFormInputs> = (data) => {
    dispatch(setVillainName(data.villainName));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={1} columnSpacing={3} alignItems="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            placeholder="Seize your identity"
            {...register('villainName', { required: true })}
            sx={{ backgroundColor: theme.palette.primary.main }}
          />
          {errors.villainName && <span>This field is required</span>}
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.main,
              '&:hover': { backgroundColor: theme.palette.secondary.light },
            }}
            className="block mt-12"
            variant="contained"
            type="submit"
            color="secondary"
          >
            Become a Villain
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
