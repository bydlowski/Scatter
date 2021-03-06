import * as PluginTypes from './PluginTypes';
import EOS from './defaults/eos';

/***
 * Setting up for plugin based generators,
 * this will add more blockchain compatibility in the future.
 */

class PluginRepositorySingleton {

    constructor(){
        this.plugins = [];

        this.loadPlugins();
    }

    loadPlugins(){
        this.plugins.push(new EOS());

        // TODO: Get from store repo
    }

    signatureProviders(){
        return this.plugins.filter(plugin => plugin.type === PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    findPlugin(name){
        return this.plugins.find(plugin => plugin.name === name);
    }

}

const PluginRepository = new PluginRepositorySingleton();
export default PluginRepository;