import { hash } from 'bcryptjs';
import { getModelForClass, pre, prop } from '@typegoose/typegoose';

// eslint-disable-next-line no-use-before-define
@pre<UserModel>('save', async function (next) {
  this.password = await hash(this.password, 10);
  next();
})

class UserModel {
  @prop({ required: true })
  public name: string;

  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: true, select: false })
  public password: string;

  @prop({ default: Date.now() })
  public createdAt?: Date;
}

export const User = getModelForClass(UserModel);
