import { ImageLayer, Layer, TextLayer } from "../model/layer.entity";
import { LayerResponse } from "./project.response";

export class LayerAssembler {

    static toEntityFromResponse(response: LayerResponse) : Layer {
        if (response.type === 'image') {
            return new ImageLayer(
                response.id,
                response.x,
                response.y,
                response.z_index,
                response.opacity,
                response.visible,
                response.image_url || ''
            );
        } else if (response.type === 'text') {
            return new TextLayer(
                response.id,
                response.x,
                response.y,
                response.z_index,
                response.opacity,
                response.visible,
                response.text_content || '',
                response.font_size || 16,
                response.font_color || '#000000',
                response.font_family || 'Arial',
                response.bold || false,
                response.italic || false,
                response.underline || false
            );
        } else {
            throw new Error(`Unknown layer type: ${response.type}`);
        }
    }

    static toEntitiesFromResponse(responses: LayerResponse[]) : Layer[] {
        return responses.map(response => LayerAssembler.toEntityFromResponse(response));
    }
}
