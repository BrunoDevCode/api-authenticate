import { getModelForClass, prop } from '@typegoose/typegoose';
import { Schema } from 'mongoose';

class ProjectModel {
  @prop({ required: true })
  public title: string;

  @prop()
  public description: string;

  @prop({ type: Schema.Types.ObjectId, ref: 'User' })
  public publisher: string;

  @prop({ default: Date.now() })
  public createdAt?: Date;
}

export const Project = getModelForClass(ProjectModel);
