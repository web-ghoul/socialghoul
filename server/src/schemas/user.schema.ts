import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true, enum: ['male', "female"] })
    gender: string;

    @Prop({ required: true, enum: ['single', "married", "divorced", "widowed"] })
    relationship: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ default: '' })
    avatar: string;

    @Prop({ default: '' })
    cover: string;

    @Prop({ required: true })
    fullname: string;

    @Prop({ default: '' })
    about: string;

    @Prop({ type: [String], default: [] })
    hobbies: string[];

    @Prop({ default: false })
    locked: boolean

    @Prop({ default: false })
    verified: boolean;

    @Prop({ default: false })
    online: boolean;

    @Prop({ default: new Date() })
    lastOnline: Date;

    @Prop({ default: new Date() })
    lastSeen: Date;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Job' })
    jobs: mongoose.Types.ObjectId[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'address' })
    lives: mongoose.Types.ObjectId[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
    friends: mongoose.Types.ObjectId[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
    supports: mongoose.Types.ObjectId[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
    blocks: mongoose.Types.ObjectId[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Report' })
    reports: mongoose.Types.ObjectId[];

    @Prop({})
    deletedAt: Date;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);