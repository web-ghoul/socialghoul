import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Job {
    @Prop({ required: true })
    company: string;

    @Prop({ required: true })
    jobTitle: string;

    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    ennDate: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    createdBy: mongoose.Types.ObjectId;

    @Prop({})
    deletedAt: Date;
}

export const JobSchema = SchemaFactory.createForClass(Job);