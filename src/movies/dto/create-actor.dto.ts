export class CreateActorDto {
  id: number;
  name: string;
  dob: Date;
  sex: 'male' | 'female';
  photoUrl: string;
}
