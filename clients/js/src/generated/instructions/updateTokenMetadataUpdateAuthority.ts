/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type Option,
  type OptionOrNullable,
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/web3.js';
import { TOKEN_2022_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const UPDATE_TOKEN_METADATA_UPDATE_AUTHORITY_DISCRIMINATOR =
  new Uint8Array([215, 228, 166, 228, 84, 100, 86, 123]);

export function getUpdateTokenMetadataUpdateAuthorityDiscriminatorBytes() {
  return getBytesEncoder().encode(
    UPDATE_TOKEN_METADATA_UPDATE_AUTHORITY_DISCRIMINATOR
  );
}

export type UpdateTokenMetadataUpdateAuthorityInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority> &
            IAccountSignerMeta<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type UpdateTokenMetadataUpdateAuthorityInstructionData = {
  discriminator: ReadonlyUint8Array;
  /** New authority for the token metadata, or unset if `None` */
  newUpdateAuthority: Option<Address>;
};

export type UpdateTokenMetadataUpdateAuthorityInstructionDataArgs = {
  /** New authority for the token metadata, or unset if `None` */
  newUpdateAuthority: OptionOrNullable<Address>;
};

export function getUpdateTokenMetadataUpdateAuthorityInstructionDataEncoder(): Encoder<UpdateTokenMetadataUpdateAuthorityInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getBytesEncoder()],
      [
        'newUpdateAuthority',
        getOptionEncoder(getAddressEncoder(), {
          prefix: null,
          noneValue: 'zeroes',
        }),
      ],
    ]),
    (value) => ({
      ...value,
      discriminator: UPDATE_TOKEN_METADATA_UPDATE_AUTHORITY_DISCRIMINATOR,
    })
  );
}

export function getUpdateTokenMetadataUpdateAuthorityInstructionDataDecoder(): Decoder<UpdateTokenMetadataUpdateAuthorityInstructionData> {
  return getStructDecoder([
    ['discriminator', getBytesDecoder()],
    [
      'newUpdateAuthority',
      getOptionDecoder(getAddressDecoder(), {
        prefix: null,
        noneValue: 'zeroes',
      }),
    ],
  ]);
}

export function getUpdateTokenMetadataUpdateAuthorityInstructionDataCodec(): Codec<
  UpdateTokenMetadataUpdateAuthorityInstructionDataArgs,
  UpdateTokenMetadataUpdateAuthorityInstructionData
> {
  return combineCodec(
    getUpdateTokenMetadataUpdateAuthorityInstructionDataEncoder(),
    getUpdateTokenMetadataUpdateAuthorityInstructionDataDecoder()
  );
}

export type UpdateTokenMetadataUpdateAuthorityInput<
  TAccountMetadata extends string = string,
  TAccountUpdateAuthority extends string = string,
> = {
  metadata: Address<TAccountMetadata>;
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  newUpdateAuthority: UpdateTokenMetadataUpdateAuthorityInstructionDataArgs['newUpdateAuthority'];
};

export function getUpdateTokenMetadataUpdateAuthorityInstruction<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TProgramAddress extends Address = typeof TOKEN_2022_PROGRAM_ADDRESS,
>(
  input: UpdateTokenMetadataUpdateAuthorityInput<
    TAccountMetadata,
    TAccountUpdateAuthority
  >,
  config?: { programAddress?: TProgramAddress }
): UpdateTokenMetadataUpdateAuthorityInstruction<
  TProgramAddress,
  TAccountMetadata,
  TAccountUpdateAuthority
> {
  // Program address.
  const programAddress = config?.programAddress ?? TOKEN_2022_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.updateAuthority),
    ],
    programAddress,
    data: getUpdateTokenMetadataUpdateAuthorityInstructionDataEncoder().encode(
      args as UpdateTokenMetadataUpdateAuthorityInstructionDataArgs
    ),
  } as UpdateTokenMetadataUpdateAuthorityInstruction<
    TProgramAddress,
    TAccountMetadata,
    TAccountUpdateAuthority
  >;

  return instruction;
}

export type ParsedUpdateTokenMetadataUpdateAuthorityInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    metadata: TAccountMetas[0];
    updateAuthority: TAccountMetas[1];
  };
  data: UpdateTokenMetadataUpdateAuthorityInstructionData;
};

export function parseUpdateTokenMetadataUpdateAuthorityInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedUpdateTokenMetadataUpdateAuthorityInstruction<
  TProgram,
  TAccountMetas
> {
  if (instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      metadata: getNextAccount(),
      updateAuthority: getNextAccount(),
    },
    data: getUpdateTokenMetadataUpdateAuthorityInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
