import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Address {
    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    city: string;

    @Prop({})
    region: string;

    @Prop({})
    street: string;

    @Prop({})
    building: string;

    @Prop({})
    floor: string;

    @Prop({})
    flat: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    createdBy: mongoose.Types.ObjectId;
}

export const AddressSchema = SchemaFactory.createForClass(Address);