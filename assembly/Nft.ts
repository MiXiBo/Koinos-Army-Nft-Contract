import { System, Protobuf, StringBytes} from "@koinos/sdk-as";
import {collections} from "./proto/collections";

export class Nft {
    _contractId: Uint8Array;


    constructor(contractId: Uint8Array) {
        this._contractId = contractId;

    }

    /**
     * Get balance of an account
     * @external
     * @readonly
     */
    balance_of(args: collections.balance_of_arguments): collections.uint64_object {
        const argsBuffer = Protobuf.encode(args, collections.balance_of_arguments.encode);
        const callRes = System.call(this._contractId, 1550980247, argsBuffer);
        if (callRes.code != 0) {
            const errorMessage = `failed to call 'NFT.get_balance': ${callRes.res.error && callRes.res.error!.message ? callRes.res.error!.message : "unknown error"}`;
            System.exit(callRes.code, StringBytes.stringToBytes(errorMessage));
        }
        if (!callRes.res.object) return new collections.uint64_object(0);
        return Protobuf.decode<collections.uint64_object>(callRes.res.object, collections.uint64_object.decode);
    }
}
