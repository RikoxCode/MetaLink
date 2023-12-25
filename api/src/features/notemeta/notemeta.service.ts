import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notemeta } from './schemas/notemeta.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class NotemetaService {
    constructor(
        @InjectModel(Notemeta.name)
        private notemetaModel: mongoose.Model<Notemeta>        
    ) {}

    findAll(): Promise<Notemeta[]> {
        try {
            const items: Promise<Notemeta[]> = this.notemetaModel.find();
            return items;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findOne(id: string): Promise<Notemeta> {
        try {
            return this.notemetaModel.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(notemeta: Notemeta): Promise<Notemeta> {
        try {
            const newItem = new this.notemetaModel(notemeta);
            return newItem.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id: string) {
        try {
            return this.notemetaModel.deleteOne({ _id: id });
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteAll() {
        try {
            return this.notemetaModel.deleteMany({});
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id: string, notemeta: Notemeta) {
        try {
            return this.notemetaModel.findByIdAndUpdate(id, notemeta, { new: true });
        } catch (error) {
            throw new Error(error);
        }
    }
}
