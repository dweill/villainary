import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setVillainName } from './state/userState.slice';

type Inputs = {
  villainName: string;
};

export default function VillainIntakeForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(setVillainName(data.villainName));
    router.push('/test');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={1} columnSpacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Seize your identity"
            {...register('villainName', { required: true })}
          />
          {errors.villainName && <span>This field is required</span>}
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={4}>
          <Button className="block mt-12" variant="contained" type="submit">
            Become a Villain
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
